
const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built by {" "}
                <a 
                    href="https://github.com/praksokpanha"
                    target="_blank"
                    className="font-medium underline underline-offset-4"
                >
                    Jackass
                </a>
                . The source code is available on {" "}
                <a 
                    href="https://github.com/praksokpanha/Netflix-Clone/tree/master"
                    target="_blank"
                    rel="noreferrer"
                    className="font-meduim underline underlin-offset-4"
                    >
                        GitHub
                </a>
                .
            </p>
        </div>
    </footer>
  )
}

export default Footer
