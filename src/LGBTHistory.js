import React, { Component } from 'react';
import './App.css';
import parade from './parade.jpg';
import stonewall from './stonewall.jpg';

class LGBTHistory extends Component {
  render() {
    return (
      <div>
        <header className="Leaders-header">
          <h1 className="Leaders-title">A Brief History of the LGBT Movement</h1>
        </header>
      	<div className="Leaders-portrait"> 
          <img src={parade} className="Leaders-image" alt="NYC Pride Parade" />
          <div className="Overlay">
              <div className="Image-text">NYC Pride Parade</div>
          </div>
        </div>
      	<p className="Leaders-intro">
      	  <span>The</span> earliest known American organization for gay rights was the Society for Human Rights. This organization started in December of 1924. They created the first American publication for gay rights called Friendship and Freedom. During the next summer, the members were reported to social services and many of the leaders were arrested. The headline for the Chicago Examiner said, “Strange Sex Cult Exposed.” It falsely claimed that the society was performing sex acts in front of children and that the group encouraged men to leave their families. One of the founders, Henry Gerber was tried under the Comstock Act, declaring that Friendship and Freedom was obscene given its homosexual material. The group quickly dissolved having not lasted a year dealing a blow that would scare other such societies from emerging for almost 3 decades.
      	</p>
      	<p className="Leaders-intro">
      	  <span>In 1950,</span> the Mattachine Society was formed as a kind of support group where gay people could discuss the issues they faced. Considered the second American Society for gay rights, the Mattachine Society quickly gained a following and decided that it would begin to promote pro-gay legislation. In 1953, a reporter criticized the organization for having communist roots and, as some of the initial leaders were communist, this was true statement. Being amid the ‘red scare,’ this was a very serious accusation and caused many of its leaders to resign allowing new ones to give the group a more capitalistic leadership. Despite this change, however, the group lost traction and disbanded after a 10-year lifespan.
      	</p>
      	<p className="Leaders-intro">
      	  <span>Because</span> of this loss, gay rights were pushed back for a while as the Civil Rights Movement took center stage. During this time, many people in the LGBT+ Community would support the Civil Rights marches because if they can get rights for one group of people it is easier to get rights for another group. 
      	</p>
      	<div className="Leaders-portrait"> 
          <img src={stonewall} className="Leaders-image" alt="Stonewall Riots" />
          <div className="Overlay">
              <div className="Image-text">Stonewall Riots</div>
          </div>
        </div>
      	<p className="Leaders-intro">
      	  <span>This</span> trend continued until 1969 when in New York a bar was raided and several lesbians, transsexuals, drag queens, and gay men were arrested. This lead to the Stonewall Riots and brought a new wave of a pro-gay movement similar to how the Brown v. Board of Education sparked a new push for the Civil Rights Movement. What followed the riots was a more peaceful grass roots approach to inform the youth. Gay-Straight Alliances began to enter schools and campuses throughout the 70s and 80s. Out of this revival was the Gay Liberation Front which was a more militant take on gay rights. They believed that heterosexual behavior was a remnant of cultural norms and the only way to get real change was to break up that idea.
      	</p>
      	<p className="Leaders-intro">
      	  <span>These</span> movements hit a lot of backlash when the AIDS Epidemic arose in the 80s and the gay community was blamed. This led to a lot of outrage and the gay rights activist had to go on a defensive and try to remove them blame from themselves. Unfortunately, this led to a stronger opposition and the gay rights movement was not very effective until the 90s. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>Before</span> the 90s began there was not a strong push towards transgender rights and they placed themselves in a similar place as gay rights activist during the Civil Rights Movement. However, during this decade transgender rights became a more discussed topic and was brought forward as a major topic for human rights. Additionally, there was a second rise of the Gay-Straight Alliance within schools to get younger audiences to understand the topics better. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>Over</span> the next two decades into present day there have been numerous victories for gay rights activists, most predominantly the national legalization of gay marriage. There have not, however, been as significant strides to protect the rights of transgender individuals. This will likely be a major topic in future political discussions to come. 
      	</p>
      </div>
    );
  }
}

export default LGBTHistory;