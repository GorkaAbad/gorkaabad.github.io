import json
import os
import time
from scholarly import scholarly

def fetch_papers(author_id):
    print(f"Fetching papers for author ID: {author_id}")
    search_query = scholarly.search_author_id(author_id)
    author = scholarly.fill(search_query)
    
    papers_data = []
    # Sort by year (descending) is automatic usually, but let's grab top 20 for now or all?
    # Managing all might be slow/blocked. Let's get top 50 recent/cited.
    # The 'publications' list in 'author' object is filled.
    
    print(f"Found {len(author['publications'])} publications.")
    
    for pub in author['publications']:
        # Get basic info first
        bib = pub.get('bib', {})
        title = bib.get('title', 'Unknown')
        year = bib.get('pub_year', 'Unknown')
        citation_count = pub.get('num_citations', 0)
        authors = "Gorka Abad et al."

        try:
            # Fill the publication to get complete details including authors
            print(f"Fetching details for: {title}")
            pub = scholarly.fill(pub)
            bib = pub.get('bib', {})
            authors = bib.get('author', authors)
            time.sleep(1) # Be polite to Google Scholar
        except Exception as e:
            print(f"Could not fill details for paper: {e}")

        # Create a simplified object
        paper = {
            "title": title,
            "year": year,
            "citation_count": citation_count,
            "link": f"https://scholar.google.com/citations?view_op=view_citation&hl=en&user={author_id}&citation_for_view={pub['author_pub_id']}",
            "authors": authors
        }
        papers_data.append(paper)

    # Sort by year desc, then citations desc
    papers_data.sort(key=lambda x: (int(x['year']) if x['year'] else 0, x['citation_count']), reverse=True)
    
    return papers_data

def main():
    AUTHOR_ID = 'KasGG7wAAAAJ'
    OUTPUT_FILE = 'src/data/papers.json'
    
    try:
        papers = fetch_papers(AUTHOR_ID)
        
        os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
        
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(papers, f, indent=2)
            
        print(f"Successfully saved {len(papers)} papers to {OUTPUT_FILE}")
        
    except Exception as e:
        print(f"Error fetching papers: {e}")

if __name__ == "__main__":
    main()
