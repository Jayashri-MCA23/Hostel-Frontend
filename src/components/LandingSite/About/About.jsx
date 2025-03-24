import { TeamCard } from "./TeamMember";

function About() {
  const Chairman = {
    name: "Dr. K. V. Kupusamy",
    designation: "Chairman",
    image:
      "https://rvscas.ac.in/static/media/chairman.9d5ef15f.jpg",
    viewprofile:"https://rvscas.ac.in/about/chairman",
  };
  const principal = {
    name: "Dr. T. Sivakumar",
    designation: "Principal",
    image:
      "https://rvscas.ac.in/static/media/Princi.a47a5a21.jpg",
    viewprofile:"https://rvscas.ac.in/about/principal",
  };
  
  const Secretary = {
    name: "Prof. SARAMMA SAMUEL",
    designation: "Secretary",
    image:
      "https://rvscas.ac.in/static/media/secretary.c3bdbb5b.jpg",
    viewprofile:"https://rvscas.ac.in/about/secretary",
  };
  const ManagingTrustee = {
    name: "Dr.K.Senthil Ganesh",
    designation: "Managing Trustee",
    image:
      "https://rvscas.ac.in/static/media/MT%20Photo.7124cceb.jpg",
    viewprofile:"https://rvscas.ac.in/about/trustee",
  };
  const HOD = {
    name: "Dr. P. Navaneetham",
    designation: "Directors of School Of Computer Studies",
    image:
      "https://rvscas.ac.in/api/rvscasac_rvscas/facultyImage/720343941.jpg",
    viewprofile:"https://rvscas.ac.in/academics/school-of-computer/faculty-details",
  };
  const Guide = {
    name: "Dr. S. RANJITHA KUMARI",
    designation: "ASSOCIATE PROFESSOR",
    image:
      "https://rvscas.ac.in/api/rvscasac_rvscas/facultyImage/1986232372.jpg",
    viewprofile:"https://rvscas.ac.in/academics/school-of-computer/faculty-details",
  };


  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our RVS College Management Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
      <TeamCard member={Chairman} />
      <TeamCard member={ManagingTrustee} />
      
        <TeamCard member={Secretary} />
        <TeamCard member={principal} />
        <TeamCard member={HOD} />
        <TeamCard member={Guide} />
      </div>
    </>
  );
}

export { About };
