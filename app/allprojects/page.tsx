
import ProjectCard from "@/components/shared/projectCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from "@/constants"
import { ArrowLeft} from "lucide-react"
import Link from "next/link"
function AllProjects() {
  return (
    <div className='min-h-screen mt-20'>
      <Breadcrumb className="ps-4">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/#projects">Projects</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/allprojects">All projects</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
       
        <div className="p-8">
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-500  border-gray-500 dark:bg-white/5 border dark:border-white/10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">UI Design</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map(project=>(
              <ProjectCard key={project.title} {...project} />
             ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <div className="">
             <h1 className='text-white/70 md:text-2xl text-center'>Coming soon...</h1>
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <div className="">
             <h1 className='text-white/70 md:text-2xl text-center'>Coming soon...</h1>
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-8">
            <div className="">
             <h1 className='text-white/70 md:text-2xl text-center'>Coming soon...</h1>
            </div>
          </TabsContent>
          <div className="flex justify-center mt-12">
            <Link href={'/#projects'}>
            <Button size="lg" variant="outline" >
            <ArrowLeft className="ml-2 h-4 w-4" />
              Back to home
            </Button>
            </Link>
            
          </div>
        </Tabs>
        </div>
    </div>
  )
}

export default AllProjects