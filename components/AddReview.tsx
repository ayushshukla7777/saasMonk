import { Button } from "@/components/ui/button"
import { trpc } from "@/app/_trpc/client"
import { FormEvent } from 'react'
import { serverClient } from "@/app/_trpc/serverClient"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AddReview() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        trpc.createReview.useMutation({
            movieId: formData.get('movieId') as string,
            reviewerName: formData.get('name') as string,
            rating: parseInt(formData.get('rating') as string),
            comments: formData.get('comments') as string,
        });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=' rounded-sm bg-violet-800 text-white  hover:bg-violet-600'>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>

                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Select >
                            <SelectTrigger className=" col-span-3">
                                <SelectValue placeholder="Select a movie" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input placeholder="Your name" id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input placeholder="Rating out of 10" id="username"  className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Textarea placeholder="Review comments" className="col-span-3 placeholder:text-gray-400 " ></Textarea>
                        
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="col-start-2 col-span-2">
                            <Button className="w-full bg-violet-500  hover:bg-violet-700" onSubmit={onSubmit} type="submit">Add Review</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
