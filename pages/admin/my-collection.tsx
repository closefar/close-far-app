import Head from 'next/head'
import Link from 'next/link'

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
					<div className='row my-5 text-center'>
						<div className='col'>
							<div className='d-inline-block mt-5'>
								<h1>
									My Collection
								</h1>
							</div>
						</div>
					</div>
					<div className='row text-start my-3'>
						<div className='col col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>All</option>
								<option value="1">Minted</option>
								<option value="2">Collected</option>
								<option value="3">On Sale</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-4 mb-5'>
							<Link href='/1'>
								<div className='cf-img-container position-relative'>
									<img src='/1.jpg' className='img-fluid img-border' />
									<div className='cf-img-text d-none fs-5'>
										O
										Watch
									</div>
								</div>
							</Link>
							<div className='mt-2'>Minted</div>
							<div className="d-flex my-2 gap-2 align-items-center justify-content-center">
								<button className="flex-grow-1 btn btn-light" type="button">Edit</button>
								<button className="flex-grow-1 btn btn-light" type="button">Add to sale list</button>
							</div>
						</div>
						<div className='col-12 col-md-4 mb-5'>
							<Link href='/2'>
								<div className='cf-img-container position-relative'>
									<img src='/2.jpg' className='img-fluid img-border' />
									<div className='cf-img-text d-none fs-5'>
										O
										Watch
									</div>
								</div>
							</Link>
							<div className='mt-2'>
								Collected at 
								<div className='d-inline ms-2'>30.00</div>
								<img src="/flow.ico" className='img-fluid mx-2' width="20" />
							</div>
							<div className="d-grid my-2">
								<button className="btn btn-light" type="button">Add to sale list</button>
							</div>
						</div>
						<div className='col-12 col-md-4 mb-5'>
							<Link href='/3'>
								<div className='cf-img-container position-relative'>
									<img src='/3.jpg' className='img-fluid img-border' />
									<div className='cf-img-text d-none fs-5'>
										O
										Watch
									</div>
								</div>
							</Link>
							<div className='mt-2'>
								On sale for 
								<div className='d-inline ms-2'>12.00</div>
								<img src="/flow.ico" className='img-fluid mx-2' width="20" />
							</div>
							<div className="d-grid my-2">
								<button className="btn btn-light" type="button">Remove from sale list</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
