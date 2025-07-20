#!/usr/bin/env python3
"""
Convert markdown to PDF script for GMT Acquisition Personalization Strategy
"""

import markdown2
from weasyprint import HTML, CSS
import os

def convert_markdown_to_pdf():
    """Convert the personalization strategy markdown to PDF"""
    
    # Read the markdown file
    with open('personalization_strategy.md', 'r', encoding='utf-8') as f:
        markdown_content = f.read()
    
    # Convert markdown to HTML
    html_content = markdown2.markdown(markdown_content, extras=['tables', 'fenced-code-blocks'])
    
    # Create full HTML document with styling
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>GMT Acquisition - Personalization Strategy Guide</title>
        <style>
            body {{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }}
            h1, h2, h3, h4 {{
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }}
            h1 {{
                font-size: 2.5em;
                text-align: center;
                color: #e74c3c;
            }}
            h2 {{
                font-size: 1.8em;
                color: #2980b9;
            }}
            h3 {{
                font-size: 1.4em;
                color: #27ae60;
            }}
            code {{
                background-color: #f8f9fa;
                padding: 2px 4px;
                border-radius: 3px;
                font-family: 'Courier New', monospace;
            }}
            pre {{
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
                border-left: 4px solid #3498db;
            }}
            blockquote {{
                border-left: 4px solid #e74c3c;
                margin: 0;
                padding-left: 20px;
                color: #7f8c8d;
            }}
            table {{
                border-collapse: collapse;
                width: 100%;
                margin: 20px 0;
            }}
            th, td {{
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }}
            th {{
                background-color: #3498db;
                color: white;
            }}
            tr:nth-child(even) {{
                background-color: #f2f2f2;
            }}
            .emoji {{
                font-size: 1.2em;
            }}
            .highlight {{
                background-color: #fff3cd;
                padding: 10px;
                border-radius: 5px;
                border-left: 4px solid #ffc107;
            }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    # Convert to PDF
    HTML(string=full_html).write_pdf('GMT_Personalization_Strategy.pdf')
    
    print("✅ PDF created successfully: GMT_Personalization_Strategy.pdf")

if __name__ == "__main__":
    try:
        convert_markdown_to_pdf()
    except Exception as e:
        print(f"❌ Error creating PDF: {e}")
        print("Make sure you have the required packages installed:")
        print("pip install markdown2 weasyprint") 