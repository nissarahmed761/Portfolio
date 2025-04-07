
export default function Footer() {
  return (
    <footer className="bg-background border-none">
      <div className="max-w-[1000px] mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © 2025 Abdul Naeem. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/abdul-naeem-7a7590203/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}