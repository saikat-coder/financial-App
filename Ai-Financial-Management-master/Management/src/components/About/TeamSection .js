// const TeamSection = () => {
//     const teamMembers = [
//       {
//         name: "John Doe",
//         role: "Founder & CEO",
//         image: "https://via.placeholder.com/200x200",
//       },
//       {
//         name: "Jane Smith",
//         role: "Chief Financial Officer",
//         image: "https://via.placeholder.com/200x200",
//       },
//       {
//         name: "Sam Wilson",
//         role: "Head of AI Development",
//         image: "https://via.placeholder.com/200x200",
//       },
//     ];
  
//     return (
//       <section className="py-12 px-6 lg:px-20">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-blue-900 mb-8">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="p-6">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 mx-auto rounded-full mb-4"
//                 />
//                 <h3 className="text-lg font-bold text-blue-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-700">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default TeamSection;
  
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Anand Choudhary",
      role: "Fortend Devloper",
      image: "https://via.placeholder.com/200x200",
    },
    {
      name: "Sudhanshu ",
      role: "Fortend Deloper",
      image: "https://via.placeholder.com/200x200",
    },
    {
      name: "Saikat Chakraborti",
      role: "Backend Developer",
      image: "https://via.placeholder.com/200x200",
    },
    {
      name: "Alice Johnson",
      role: "Marketing Director",
      image: "https://via.placeholder.com/200x200",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20 team-section">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-blue-900">
                {member.name}
              </h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;