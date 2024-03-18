import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 
const Page = () => {
  return (
    <div  className=''>
  <Tabs defaultValue="account" className="w-[400px] bg-black">
      <TabsList className="grid w-full grid-cols-2 bg-black">
        <TabsTrigger value="account" >Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account"  className=" text-black">
        <Card  className="bg-black text-white">
          <CardHeader className="bg-black text-white">
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 bg-black text-white">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" className=" text-black"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte"  className=" text-black"/>
            </div>
          </CardContent>
          <CardFooter  className=" text-black" >
            <Button >Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className=" text-black">
        <Card  className="bg-black text-white">
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" className=" text-black" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" className=" text-black"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    </div>
  )
}

export default Page
