import React, { useState } from 'react'
import { SidebarData } from './SidebarData';
//import { AddRecord } from './components/AddRecord';
import { IconContext } from 'react-icons';
import croppped from './croppped.gif';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Detection.css';

//------------------------
/*
const video = document.getElementById('videoInput')
//const faceapi = require('./js/face-api.min.js');
//const faceapi="./js/face-api.min.js"

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
]).then(start)

function start(){
    document.body.append('Models Loaded')

    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )

   // video.src = '../videos/speech.mp4'

    recognizeFaces()
}

async function recognizeFaces(){
    const labeledDescriptors = await loadLabeledImages()
    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.7)

    video.addEventListener('play', () => {
        console.log('playing')

        const canvas = faceapi.createCanvasFromMedia(video)
        document.body.append(canvas)

        const displaySize = {width: video.width, height: video.height}
        faceapi.matchDimensions(canvas, displaySize)

        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()

            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

            const results = resizedDetections.map((d) => {
                return faceMatcher.findBestMatch(d.descriptor)
            })

            results.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, {label: results.toString()})
                drawBox.draw(canvas)
            })


        }, 100);
    })
}

function loadLabeledImages() {
    const labels = ['Black Widow', 'Captain America', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark', 'Keanu Reeves']

    return Promise.all(
        labels.map(async (label) => {
            const descriptions = []
            for(let i=1; i<=4; i++) {
                const img = await faceapi.fetchImage(`../labeled_images/${label}/${i}.jpg`)

                const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                descriptions.push(detections.descriptor)
            }
            document.body.append(label + 'Faces Loaded')
            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}
*/
//--------------------------



const Detection = () => {

    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <img src={croppped} className="mister" /> 
            <IconContext.Provider value ={{color: '3e9e91'}}>            
            <div className="navbar">
             <Link to ="#" className="menu-bars">   
                 <FaIcons.FaBars onClick={showSidebar} />
             </Link>  
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to ="#" className="menu-bars">   
                        <AiIcons.AiOutlineClose/>
                        </Link>  
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
            {/* <video id="videoInput" width="720p" height="550" muted controls></video>
            <script defer async src="../../public/js/face-api.min.js"></script>
            <script defer async src="../../public/js/script.js"></script>  */}

            {/* ./js/face-api.min.js */}
    
        </div>
    )
}

export default Detection
