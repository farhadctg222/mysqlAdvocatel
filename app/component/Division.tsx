
import Link from 'next/link';
import { Suspense } from "react";
import './Division.css'
import DataMainPageShow from './DataMainPageShow';
import Loading from './loading'


const Division = () => {



    return (
        <div style={{ marginTop: '100px' }}>
            <div className="listLawyer">
                <Link href=""> <title>Dhaka ITP Lawyer </title></Link>

                <Link href=""> <title>Chattogram ITP Lawyer </title></Link>
                <Link href="https://burjal.netlify.app"><title>Hotel Room </title></Link>

                <Link href=""><title>Sylhet ITP Lawyer </title></Link>

                <Link href=""> <title>Bogra ITP Lawyer </title></Link>

                <h3 className="lawItps">Division Wise ITP & Lawyer</h3>
                <div className="button">




                    <Link href="/dhaka">  <button>Dhaka</button></Link>
                    <Link href="/chattogram">
                        <button className="activeBtn">
                            Chattogram
                        </button>
                    </Link>


                    <Link href="/rajshahi"><button>Rajshahi</button></Link>
                    <Link href="/sylhet"><button>Sylhet</button></Link>
                    <Link href="/rangpur"><button>Rangpur</button> </Link>
                    <Link href="/khulna"><button>Khulna</button></Link>
                    <Link href="/barisal"><button>Barisal</button></Link>
                    <Link href="/mymensingh"><button>Mymensingh</button></Link>

                </div>

            </div> <br />
            <Link href="https://lawyerbangladesh.netlify.app">  <title>Specialist Lawyer & ITP in Bangladesh</title></Link>
            <div className="listLawyer">
                <h3 className="lawItps">Division Wise Specialist Law Farm</h3>
                <div className="button">




                    <Link href="/div-dhaka">  <button>Dhaka</button></Link>
                   <Link href="/div-chattogram">
                        <button className="activeBtn">
                            Chattogram
                        </button>
                    </Link>
                    <Link href="/div-rajshahi"><button>Rajshahi</button></Link>
                    <Link href="/div-sylhet"><button>Sylhet</button></Link>
                    <Link href="/div-rangpur"><button>Rangpur</button> </Link>
                    <Link href="/div-khulna"><button>Khulna</button></Link>
                    <Link href="/div-barisal"><button>Barisal</button></Link>
                    <Link href="/div-mymensingh"><button>Mymensingh</button></Link>

                </div>
            </div><br />
            <h4 className='Recently'>Recently Added Lawyer and ITP to Our Website</h4>
            <div>
                <Suspense fallback={<Loading />}>

                    <DataMainPageShow>
                    </DataMainPageShow>
                </Suspense>

            </div>

            <div className="ProfileCard" style={{ border: '1px solid black', margin: '3px', textAlign: 'center', backgroundColor: '#f0f0f0' }} >
                <h2 className='lawItps'>About Lawyer Bangladesh</h2>
                <p>Lawyer-bangladesh.com is going to be the best website in Bangladesh. Common people will benefit through this web site. Skilled lawyers and accountants profiles on this web site with their pictures, their names, their educational qualifications
                    Can see office address. Remember that Lawyers-bangladesh.com does not give an Appointment to anyone.</p>

            </div>


        </div>
    );
};

export default Division;






