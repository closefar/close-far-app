import Link from 'next/link'

export default function Footer() {

  return (
    <>
        <div className="container">
            <div className='row my-3'>
                <div className='cf-border'></div>
            </div>
        </div>
        <div className="container py-3">
            <div className="row justify-content-center">
                <div className="col-6 col-md-4">
                    <p>Location:</p>
                    <p>Toronto, Canada</p>
                </div>
                <div className="col-6 col-md-4">
                    <p>Links:</p>
                    <p><Link href="/about">About</Link></p>
                    <p><Link href="/privacy-policy">Privacy Policy</Link></p>
                </div>
                <div className="col col-md-4"></div>
            </div>
        </div>
    </>
  )
}