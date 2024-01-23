import Head from 'next/head'

export default function Sell() {

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
								Sell
							</h3>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-4 mb-5'>
							<img src="/1.jpg" className='img-fluid img-border' />
							<div className="input-group mt-2">
								<input type="text" className="form-control shadow-none" placeholder="Price in Flow" aria-label="Price" aria-describedby="button-addon1" />
								<button className="btn btn-outline-primary" type="button" id="button-addon1">List for sale</button>
							</div>
						</div>
						<div className='col-12 col-md-4 mb-5'>
							<img src="/2.jpg" className='img-fluid img-border' />
							<div className="input-group mt-2">
								<input type="text" disabled value="45.00" className="form-control shadow-none" placeholder="Price in Flow" aria-label="Price" aria-describedby="button-addon1" />
								<button className="btn btn-outline-primary" type="button" id="button-addon1">Unlist</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
