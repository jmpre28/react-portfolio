import Profile from '../assets/images/profile.jpg';

export default function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Profile} height="300px" width="300px" alt="Profile" style={{ marginRight: '50px' }} />

                <div style={{ textIndent: '1em' }}>
                    <p>
                        Hello and welcome to my portfolio! I'm Jake Preciado, a student at the University of Utah. I am a passionate learner on the journey to becoming a full-stack web engineer.
                        This space is dedicated to showcasing my evolving skills and experiences in the world of web development.
                    </p>
                    <p>
                        In the ever-evolving field of web development, I find joy in building intuitive and visually appealing digital
                        experiences. From front-end aesthetics to back-end functionality, each line of code represents a step closer to my goal
                        of creating impactful and user-friendly websites. I love the opportunities I have to enhance my critical thinking and
                        problem-solving skills as I am greatly fulfilled in my work through doing so!
                    </p>
                    <p>
                        Outside of coding, you'll often find me outdoors with my camera or drone, capturing the world around me. And
                        when I'm not doing that, I'm jamming on my guitar, creating music that brings a little extra joy to my day.
                    </p>
                </div>
            </div>
        </div>
    );
}