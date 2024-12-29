import '@/assets/styles/global.css'
type Props = {
    children: any;
}

export default function layout({children}: Props) {
  return (
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}