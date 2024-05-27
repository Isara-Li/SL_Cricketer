import React, { useState } from 'react';
import Appbar from '../components/Appbar';
import Card from '../components/Card';



function Home() {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
                sendImageToServer(reader.result.split(',')[1]); // Sending base64 data without the prefix
            };
            reader.readAsDataURL(file);
        }
    };

    const sendImageToServer = (base64Image) => {
        fetch('http://127.0.0.1:5000/classify_image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
           
            body: JSON.stringify({ image_data: base64Image }), // Ensure the key matches the expected key on the server side
        })
        
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to send image to server');
            }
        })
        .then(data => {
            console.log('Image sent to server successfully');
            console.log('Classification results:', data);
        })
        .catch(error => {
            console.error('Error sending image to server:', error);
        });
        console.log(base64Image)
        //console.log(response)

    };
  
    return (
        <div>
            <Appbar />
            <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto'>
           
                <div className='flex flex-row flex-wrap gap-6'>
                    <Card
                        image="https://srilankacricket.lk/wp-content/uploads/2024/02/Pathum-Nissanka-100-runs_VAK_2360-E-1.jpg"
                        title="Pathum Nissanka"
                        description="Pathum Nissanka Silva is a professional Sri Lankan cricketer who plays for Sri Lanka in all three formats of the game. He made his international debut for the Sri Lanka cricket team in March 2021 and currently slotted as the permanent opening batsman."
                    />
                    <Card
                        image="https://cdn.wisden.com/wp-content/uploads/2023/04/GettyImages-1243144517-980x530.jpg"
                        title="Dasun Shanaka"
                        description="Madagamagamage Dasun Shanaka is a professional Sri Lankan cricketer and former limited overs captain of the Sri Lankan cricket team. An all-rounder, Shanaka is a right-handed batter and a right-arm medium fast bowler."
                    />
                    <Card
                        image="https://crickettimes.com/wp-content/uploads/2023/09/Maheesh-Theekshana.webp"
                        title="Maheesh Theekshana"
                        description="Morawakage Maheesh Theekshana is a professional cricketer who plays for the Sri Lanka national cricket team in all three formats of the game. He made his international debut for Sri Lanka in September 2021."
                    />
                    <Card
                        image="https://archives1.dailynews.lk/sites/default/files/news/2021/11/03/Wanindu-Hasaranga-3.jpg"
                        title="Wanindu Hasaranga"
                        description="Pinnaduwage Wanindu Hasaranga de Silva, better known as Wanindu Hasaranga, is a professional Sri Lankan cricketer and current T20I captain who plays for the Sri Lanka cricket team in white ball cricket as a Batting All rounder. He is a Right-arm leg spinner."
                    />
                </div>
                <div class="mb-6 border border-gray-500 bg-gray-100 rounded-lg px-4 py-2 w-7/8">
    <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        class="outline-none"
    />
</div>

                {uploadedImage && (
                    <Card
                        image={uploadedImage}
                        title="Uploaded Image"
                        description="This is the image you just uploaded."
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
