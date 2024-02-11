import Head from 'next/head'
import Link from 'next/link'

export default function Collect() {

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
							<div className='d-inline-block mt-5 '>
								<h1>
									Collect
								</h1>
							</div>
						</div>
					</div>
					<div className='row text-start mb-3'>
						<div className='col-12 mb-2'>
							Closeups
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<input placeholder='Name' className="form-control shadow-none cf-form-control" />
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<input placeholder='Search on tags' className="form-control shadow-none cf-form-control" />
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Country</option>
								<option value="1">Czech Republic</option>
								<option value="2">Germany</option>
								<option value="3">Italy</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Year of Birth</option>
								<option value="1">1994</option>
								<option value="2">1995</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Month of Birth</option>
								<option value="1">Oct.</option>
								<option value="2">Sept.</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Day of Birth</option>
								<option value="1">1</option>
								<option value="2">2</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Nationality</option>
								<option value="1">Iraninan</option>
								<option value="2">Dutch</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>State</option>
								<option value="1">North</option>
								<option value="2">Fars</option>
								<option value="3">Blah</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Language</option>
								<option value="1">English</option>
								<option value="2">Dutch</option>
								<option value="3">Italian</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Pronounce</option>
								<option value="1">She/her/hers</option>
								<option value="2">He/him/his</option>
								<option value="3">They/them/thiers</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<select className="form-select shadow-none cf-form-control">
								<option selected>Jobs</option>
								<option value="1">Software eng.</option>
							</select>
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
					</div>
					<div className='row'>
						{[1,2,3,4,5,6,7,8].map((i) => {
							return <div className='col-12 col-md-4 mb-3'>
								<Link href={`/${i}`}>
									<div className='cf-img-container position-relative'>
										<img src={`/${i}.jpg`} className='img-fluid img-border' />
										<div className='cf-img-text d-none fs-5'>
											O
											Watch
										</div>
									</div>
									<h4 className='text-start'>
										<div className='d-inline'>30.00</div>
										<img src="/flow.ico" className='img-fluid mx-2' width="20" />
									</h4>
								</Link>
							</div>
						})}
					</div>
				</div>
			</main>
		</>
	)
}
