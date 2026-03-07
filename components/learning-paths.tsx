import { courseData, careerPaths } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function LearningPaths() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Choose the path that matches your career goal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select from our industry-aligned learning paths designed by professionals
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {courseData.map((course, index) => (
            <button
              key={course.label}
              className="px-4 py-2 rounded-full border border-border hover:bg-secondary transition-smooth hover:border-primary/50 text-foreground text-sm hover:shadow-md"
              style={{ animation: `slide-up 0.6s ease-out ${index * 0.05}s backwards` }}
            >
              {course.label}
            </button>
          ))}
        </div>

        {/* Career Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <Card key={path.id} className="p-6 hover:shadow-lg transition-smooth border-border hover:border-primary group" style={{ animation: `rotate-in 0.6s ease-out ${index * 0.1}s backwards` }}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{path.title}</h3>
                <p className="text-muted-foreground text-sm">{path.description}</p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-background rounded px-3 py-2">
                    <p className="text-muted-foreground text-xs">Courses</p>
                    <p className="font-semibold text-foreground">{path.courses}</p>
                  </div>
                  <div className="bg-background rounded px-3 py-2">
                    <p className="text-muted-foreground text-xs">Duration</p>
                    <p className="font-semibold text-foreground">{path.duration}</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  Explore Path <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
