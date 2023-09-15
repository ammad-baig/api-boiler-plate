import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Get, Post, Put } from "../router/ApiMethods"



export default function AddProject() {

    // const baseApi = 'https://jsonplaceholder.typicode.com/posts'

    const [model, setModel] = useState<any>({})

    const params = useParams()

    const getPostById = () => {
        Get('posts', params.id)
            .then((res) => {
                setModel({ ...res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updateList = () => {
        Put(`posts/${params.id}`, model)
            .then((res) => {
                console.log("Post Updated Successfully ==>", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const sumbitList = () => {
        Post('posts', model)
            .then((res) => {
                console.log("Post Added Successfully ==>" + res.data)
            })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getPostById()
    }, [])


    return (
        <>
            <Box style={{ height: "100vh", background: "linear-gradient(90deg, #fcff9e 0%, #c67700 100% )" }} className=" d-flex flex-column justify-content-center text-center ">

                <Typography className="pb-5 fw-bold text-center " variant="h3" >{params.id ? "EDIT PROJECT" : "ADD PROJECT"}</Typography>
                <Box>
                    <input
                        value={model.title ? model.title : ""}
                        onChange={(e: any) => {
                            setModel({ ...model, title: e.target.value })
                        }}
                        className="w-25 p-3 my-3 border-0 rounded-5" type="text" placeholder="Title" />
                </Box>
                <Box>
                    <textarea
                        rows={8}
                        value={model.body ? model.body : ""}
                        onChange={(e: any) => {
                            setModel({ ...model, body: e.target.value })
                        }}
                        className="w-25 p-3 border-0 rounded-5" placeholder="Body"></textarea>
                </Box>
                <Box>
                    {params.id ? (
                        <Button onClick={updateList} variant="contained">Update</Button>
                    ) : (
                        <Button onClick={sumbitList} variant="contained">Submit</Button>
                    )}
                </Box>
            </Box>
        </>
    )
}
