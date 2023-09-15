import { Box, Button, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom"
import { Delete, Get } from "../router/ApiMethods";

export default function Project() {


    const [ListData, setListData] = useState<any>([])

    const getData = () => {
        Get('posts')
            .then((res) => {
                setListData([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate()
    const addList = () => {
        navigate(`/add`)
    }

    const deleteList = (id: number) => {
        Delete('posts', id)
            .then(() => {
                console.log("Post Deleted Successfully")
            })
            .catch((err) => {
                console.log(err)
            })
    }




    return (
        <>

            <Box style={{ background: "linear-gradient(to right, #0b486b, #f56217)" }} className="text-center mx-auto">
                <Typography variant="h3" className="fw-bold text-center">POSTS</Typography>
                <Button onClick={addList} variant="contained" >
                    ADD PROJECT
                </Button>


                <Box className="container text-center d-flex flex-column align-items-center">
                    {ListData.map((x: any, i: number) => {
                        return (
                            <Box className=" border-0 rounded-pill" style={{ backgroundColor: "lightgrey", margin: 20, padding: 20, width: 800 }} key={i}>

                                <Typography>
                                    <span className="fw-bold">ID</span>: {x.id}
                                </Typography>
                                <Typography>
                                    <span className="fw-bold">TITLE</span>: {x.title}
                                </Typography>
                                <Typography>
                                    <span className="fw-bold ">BODY</span> : {x.body}
                                </Typography>
                                <Typography>
                                    <EditIcon
                                        onClick={() => {
                                            navigate(`/add/${x.id}`);
                                        }}
                                        className="text-primary fs-2 m-2" />
                                    <DeleteIcon
                                        onClick={() => { deleteList(x.id) }}
                                        className="text-danger fs-2 m-2" />
                                </Typography>
                            </Box>
                        )

                        console.log(x.id)
                    })}
                </Box>
            </Box>
        </>
    )
}
