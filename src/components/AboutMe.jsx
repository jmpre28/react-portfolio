import Profile from '../assets/images/profile3.jpg';
import Image2 from '../assets/images/taggart-lake.jpg';
import BgImage from '../assets/images/coastal-rocks.jpg';
import '../assets/css/about.css';

export default function AboutMe() {
    return (
        <main id="main">
            <div className='backdrop img-fluid'>
                <div class="container py-5 py-lg-6">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <h1 class="display-3">I'm Jake.</h1>
                            <div class="border border-2 border-light w-15 my-4"></div>
                            <p class="lead text-light mb-4">A curious mind, dedicated to growth and continuous learning.</p>
                        </div>
                        <div class="col-lg-4 justify-content-center">
                            <img className="profile-picture" src={Profile} width="250px" height="250px" />
                        </div>
                    </div>
                </div>

                <div class="bg-black text-white">
                    <div class="container py-3">
                        <div class="bg-black mt-n5 mt-lg-n6 px-3 px-lg-0">
                            <div class="row justify-content-center py-4 py-lg-5">
                                <div class="col-md-10 col-lg-8">
                                    <p>I am currently navigating through the world of software development, and am loving every second of it. I discovered this new found passion through a love for solving complex problems, and the fulfillment of finding that perfect solution. I am a full stack developer proficient in JavaScript, React, HTML/CSS, Python, as well as backend skills such as Node, Express, MongoDB, and MySQL.</p>
                                    <img className="img-fluid second-picture" src={Image2} />
                                    <h2 class="mt-4">My story</h2>
                                    <p>I'm a photographer, musician, gamer, and an enthusiast of all things creative. Whether I'm capturing moments behind the lens, jamming on my guitar, or getting lost in worlds and stories through gaming, my love for creativity is endless. It's more than just hobbies; it's who I am!</p>
                                    <p>I have been married to my best friend, Schuyler, for 1 year now, and am so grateful to have such a strong supporter by my side. Life threw its challenges at both of us, but in those moments of difficulty, we found each other, and everything changed. Our paths converged at a time when it mattered the most. She is my greatest joy!</p>
                                    <p>I am a rapid learner, and have the innate ability to establish meaningful connections and relationships. I am grateful for life and all the experiences that come with it. These skills and experiences have refined me and are paving the way for me to become an exceptional software developer in the tech world. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}