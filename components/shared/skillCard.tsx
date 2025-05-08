import { ISkillCard } from "@/types"


function SkillCard(skill:ISkillCard) {
  
  return (
    <div className="bg-gray-800 dark:bg-white/5 border border-gray-700 dark:border-white/10  rounded-xl py-6 px-3 hover:bg-gray-700 dark:hover:bg-white/10 transition-colors">
      <div className="flex flex-col items-center text-center">
      <div >
            <skill.icon  className={skill.style}/>
          </div>
        <h3 className="mt-4 font-medium text-lg ">{skill.title}</h3>
        <p className="mt-2 text-sm text-gray-200 dark:text-white/70 max-sm:hidden max-lg:line-clamp-2">{skill.descr}</p>
      </div>
    </div>
  )
}  export default SkillCard