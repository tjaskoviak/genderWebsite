import React, { Component } from 'react';
import './App.css';
import march from './marchonwash.jpg';
import rightsact from './rightsact.jpeg';

class CivilRightsHistory extends Component {
  render() {
    return (
      <div>
      	<h1>A Brief History of the Civil Rights Movement</h1>
      	<div className="Leaders-portrait"> 
          <img src={march} className="Leaders-image" alt="March on Washington for Jobs and Freedom" />
          <div className="Overlay">
              <div className="Image-text">March on Washington</div>
          </div>
        </div>
      	<p className="Leaders-intro">
      	  <span>When</span> America was formed, there was not equality between black and white people. Socially, economically, and legally they were not treated the same. One of the most significant differences is the proportion of black Americans who were used as slave labor. The treatment and expectations of this group brought a greater divide between different American peoples. This difference in treatment led to very different parts of America, the north and the south. Within the north, slavery was predominantly eliminated whereas in the south slavery was still and important part of business and success. This led to the southern states seceding from the United states after the election of 1860 from fear that the newly elected Abraham Lincoln would eliminate slavery for the nation. This led to the American Civil War, the reunification of the United States with northern victory, and the creation of the 13th Amendment to the constitution.
      	</p>
      	<p className="Leaders-intro">
      	  <span>In</span> the coming years after the war, 4 million slaves were freed but the conditions quickly returned to what they were before the war. Sharecropping became popular and forced newly freed slaves to work on farms for wages that reached their needs for living. This created and environment similar to slavery but with more money changing hands. Many black Americans were back to working on the same plantations that a war was fought over. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>Along</span> with these new conditions, came new laws attempting to oppress this rising group. Grandfather laws were enacted in many southern states that allowed someone to vote in an election if and only if their father and their grandfather could vote before the 13th Amendment was passed. This meant newly freed slaves couldn’t vote because no black Americans could vote before that date.
      	</p>
      	<p className="Leaders-intro">
      	  <span>This</span> oppression continued to create racial tension for nearly a century before conditions started to improve. Segregation became a norm in separating both black and white services. This was brought to court and in 1896 Plessy v. Ferguson stated that segregation was legal under the “separate but equal” doctrine. If equal services are provided, then segregation was allowed nationwide. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>Conditions</span> continued to escalate and in the 1950’s the American Civil Rights Movement was sparked. The first effort that was made was the court case Brown v. Board of Education in 1954. This declared that “separate but equal” is inherently unequal and called for integration of schools. This was the first major success of the Civil Rights Movement and brought a large surge of protests and calls for change in the community. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>Protests</span> and marches became common. Major events such as the Montgomery Bus Boycott, the desegregation of Little Rock Central High School, and Sit Ins in dinners took place. There was a large push for voter registration and services such as literacy schooling allowed uneducated black Americans to pass literacy tests to vote. There was also the rise of leaders such as Martin Luther King Jr. and Malcolm X. 
      	</p>
      	<div className="Leaders-portrait"> 
          <img src={rightsact} className="Leaders-image" alt="LBJ signing the Civil Rights Act of 1964" />
          <div className="Overlay">
              <div className="Image-text">LBJ and the Civil Rights Act of 1964</div>
          </div>
        </div>
      	<p className="Leaders-intro">
      	  <span>Through</span> the efforts of the Civil Rights Protesters along with many minor laws three major acts were passed. The Civil Rights Act of 1964 prohibited discrimination of race color, religion, sex, or national origin in the case of employment practices and public accommodations. The Voting Rights Act of 1965 prohibits poll taxes, literacy tests, and subjective voting registration tests. Finally, the Civil Rights Act of 1968 prohibited discrimination of housing based on race, religion, and national origin. Additionally, this act declared that committing a crime with the intention of threatening a group of people based on race, color, religion, and national origin was a hate crime.  
      	</p>
      </div>
    );
  }
}

export default CivilRightsHistory;