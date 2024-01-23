import Head from 'next/head'
import Link from 'next/link'

export default function MyNFTs() {

	return (
		<>
			<Head>
				<title>Close Far</title>
				<meta name="description" content="Close Far" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className='container'>
					<div className='row text-center'>
						<div className='col'>
							<h3>
								My NFTs
							</h3>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 mb-4'>
                            <Link href='/1'>
							    <img src="/1.jpg" className='img-fluid img-border' />
                                <h4>
                                    <div className='d-inline'>30.00</div>
                                    <img src="/flow.ico" className='img-fluid mx-2' width="20" />
                                </h4>
                            </Link>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
