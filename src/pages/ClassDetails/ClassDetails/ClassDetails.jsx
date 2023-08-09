import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import ClassReview from '../ClassReview/ClassReview';
import RelatedClass from '../RelatedClass/RelatedClass';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClassDetails = () => {
    const { id } = useParams()
    const [singleClass, setSingleClass] = useState({})
    useEffect(() => {
        if (id) {
            axios.get(`https://talk-trek-server.vercel.app/singleClass/${id}`)
                .then(result => setSingleClass(result?.data))
        }
    }, [id])
    return (
        <>
            <Details singleClass = {singleClass} />
            <ClassReview id = {id} />
            <RelatedClass category = {singleClass.classCategory} id = {id} />
        </>
    );
};

export default ClassDetails;