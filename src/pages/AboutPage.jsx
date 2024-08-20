function AboutPage () {
    return (
        <div className="about-page-container">
            <section className="about-section">
                <h3 className="about-section-heading">Welcome to Brews & Bites!</h3>
                <p className="about-section-paragraph">
                    Brews & Bites is your go-to spot for exceptional coffee and delicious food. This app is designed to help you manage our product offerings, keep track of inventory, and stay informed about the latest updates and events.
                </p>
            </section>

            <section className="about-section">
                <h3 className="about-section-heading">Our Mission</h3>
                <p className="about-section-paragraph">
                    Our mission is to deliver top-notch coffee and food in a welcoming environment. We strive to provide excellent service and create memorable experiences for our customers every day.
                </p>
            </section>

            <section className="about-section">
                <h3 className="about-section-heading">Meet Our Manager</h3>
                <p className="about-section-paragraph">
                    Hello! I'm Nicolas, the proud owner and manager of Brews & Bites. I'm passionate about creating a warm and inviting space for everyone who loves great coffee and delicious food. Here's a bit about me and what drives my love for this coffee shop.
                </p>
                <p className="about-section-paragraph">
                    With over 12 years of experience in the coffee industry, I started Brews & Bites with a vision of blending quality brews with a cozy atmosphere. When I'm not behind the counter, you can find me exploring new coffee trends or experimenting with recipes.
                </p>
                <img src="../../images/manager.jpg" alt="Nico's photo" className="about-photo" />
                <p className="about-section-paragraph">
                    My favorite part of the day is seeing the smiles on our customers' faces.
                </p>
                <p className="about-section-paragraph">
                    Feel free to drop me a line at <a href="mailto:nanzoate@gmail.com">nanzoate@gmail.com</a> if you have any questions or just want to say hello!
                </p>
            </section>
        </div>
    );
}

export default AboutPage;