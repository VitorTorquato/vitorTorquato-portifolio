

interface CardsProps{
    id:number;
    title:string
    cover:string;
    description:string;
    tools:string;
    urlDeploy:string;
    urlCode:string;
}

export function ProjectCard(project:CardsProps){
    return(
       
       <div className="w-full max-w-96 h-fit flex flex-col border-2 gap-4  bg-slate-900 hover:bg-slate-700 duration-500 border-slate-200 drop-shadow p-6 mt-12"
   
       >
            <h2 className="w-full text-md md:text-lg text-slate-100">{project.title}</h2>
            <div  className='max-w-72 max-h-72 overflow-hidden flex items-center justify-center mx-auto'>
                <div className='flex items-center justify-center'>
                    <img 
                    className="w-full object-cover"
                    src={project.cover} alt={project.title} />
                </div>
            </div>
            <p className='text-slate-100 font-medium'>{project.description}</p>
            <span className='text-slate-100 font-medium'>Tools: {project.tools}</span>


            <div className='w-full flex items-center justify-between gap-3'>
                <a
                className='w-full flex items-center justify-center border-2 p-2 text-slate-100 cursor-pointer'
                href={project.urlDeploy} target='_blank'>Check it out</a>
                <a 
                 className='w-full flex items-center justify-center border-2 p-2 text-slate-100 cursor-pointer'
                href={project.urlCode} target='_blank'>Code</a>
            </div>
        </div>
    )
}