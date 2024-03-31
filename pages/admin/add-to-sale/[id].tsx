import Head from 'next/head'
import Link from 'next/link'
import Mock from '../../../config/mock'
import { useRouter } from 'next/router'

export default function AddToSale() {

	const router = useRouter()
	const { id } = router.query
	
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
									Add to Sale
								</h1>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-4 mb-5'>
							<Link href={`/${id}`}>
								<div className='cf-img-container position-relative'>
									<img src={`/${id}.jpg`} className='img-fluid img-border' />
									<div className='cf-img-text d-none fs-5'>
										O
										Watch
									</div>
								</div>
							</Link>
							<div className='text-center mt-3 cf-dot-seperator'>
								<span>
									{Mock[id] && Mock[id].name}
								</span>
								<span>
									{Mock[id] && Mock[id].y_birth}
								</span>	
							</div>
						</div>
						<div className='col-12 col-md-8 mb-5'>
							<div className='mb-3'>
								<input placeholder='Price' className="form-control shadow-none cf-form-control" />
								<div className='row'>
									<div className='cf-border-small'></div>
									<div className='cf-border'></div>
								</div>
							</div>
							<div className='mb-3 text-end'>
								<button type="button" className="btn btn-light">Add to Sale list</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
