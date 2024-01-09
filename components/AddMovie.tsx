import { trpc } from "@/app/_trpc/client"
import { serverClient } from "@/app/_trpc/serverClient"
import { Button } from "@/components/ui/button"
import { FormEvent } from 'react'
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
import { Label } from "@/components/ui/label"

export function AddMovie() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        trpc.createMovie.useMutation({
            name: formData.get('name') as string,
            releaseDate: formData.get('releaseDate') as string,
            averageRating: 0,
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className=' text-violet-600 text-sm rounded-sm border-violet-300 hover:text-violet-800'>Add New Movies</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new movie</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input placeholder="Name" id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input placeholder="Release date" id="releaseDate" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="col-start-2 col-span-2">
                            <Button className="w-full bg-violet-500  hover:bg-v" type="submit" onClick={onSubmit}>Create Movie</Button>
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}