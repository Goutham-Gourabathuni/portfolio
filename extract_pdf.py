import fitz
doc = fitz.open(r'd:\13 october - Internship batch\cursor-test\pdfs\Goutham-resume-updated-22nd-feb.pdf')
text = ""
for page in doc:
    text += page.get_text()
with open(r'd:\13 october - Internship batch\cursor-test\pdf_out.txt', 'w', encoding='utf-8') as f:
    f.write(text)
