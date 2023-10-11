import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  

const locations = [
    {
        id:1,
        name:"gerage 1"
    },
    {
        id:2,
        name:"other gerage at town"
    },
    {
        id:3,
        name:"secondary gerage"
    },
]

export default function Page(){
    return(
        <>
        {locations.map((a,index) => (
            <Card key={index} className="m-10">
            <CardHeader>
              <CardTitle>{a.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          
        ))}
        </>
    )
}