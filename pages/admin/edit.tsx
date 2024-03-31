import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Edit() {

	const router = useRouter()

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
									Edit 
								</h1>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-6 mb-2'>
							<input placeholder='Name' className="form-control shadow-none cf-form-control" />
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
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
						<div className='col-12 col-md-6 mb-2'>
							<input placeholder='tags' className="form-control shadow-none cf-form-control" />
							<div className='row'>
								<div className='cf-border-small'></div>
								<div className='cf-border'></div>
							</div>
						</div>
						<div className='col-12 col-md-6 mb-2'>
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
					<div className='row my-5'>
						<div className='col text-end'>
							<button onClick={() => router.push('/admin/my-collection')} className='btn btn-light'>Update</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
