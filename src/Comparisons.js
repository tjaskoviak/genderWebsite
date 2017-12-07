import React, { Component } from 'react';
import './App.css';
import mlk from './mlk.jpg';
import ellen from './ellen.jpg';

class Comparisons extends Component {
  render() {
    return (
      <div>
      	<h1 className="Leaders-title">Major Comparisons Between each Movement</h1>
      	<p className="Leaders-intro">
      	  <span>The discrimination</span> of the LGBT+ Movement stems from a similar place as the Civil Rights Movement. Both are from a cultural history of social norms however LGBT discrimination also originates from religious works. Because religion is a social construct protected by laws there is a much different fight when trying to promotes LGBT Rights. 
      	</p>
      	<p className="Leaders-intro">
      	  <span>When</span> compared to the Civil Rights Movement the LGBT+ Movement was more a change in social behaviors than legal ones, and today this movement continues to aim at creating a social change first. Psychologically, the Civil Rights Movement was more more obvious and showed larger change. It is very rare to see a sign today that says “No Gays” and people promoting that there should be ‘only gay schools.’ For this reason the Civil Rights Movement has seen more change over a shorter period of time than the LGBT+ Movement has.
      	</p>
      	<p className="Leaders-intro">
      	  <span>Both</span> Black and Americans in the Civil Rights Movement and LGBT+ Members today face discrimination and both because of their ‘other’ status. So long as they are considered outsiders or different then it is easier for people to overlook similarities and focus on differences.
      	</p>
      	<h2> Major Camparisons of the Leaders </h2>
      	<div className="Leaders-portrait"> 
          <img src={mlk} className="Leaders-image" alt="Martin Luthar King Jr" />
          <div className="Overlay">
              <div className="Image-text">Martin Luthar King Jr</div>
          </div>
        </div>
        <p className="Leaders-intro">
          <span>Names</span> like Rosa Parks, Malcolm X, and Martin Luther King Jr. are all names that most people recognize and associate with the leaders of the civil rights movement in the 60’s.  These leaders are known for their acts of defiance against unjust laws and their powerful speeches that gained them a fallowing. They dedicated their lives to the movement and have earned a spot in history for doing so. Currently we have popular leaders that aim to progress the LGBTQ+ movement as well, but they are a little different from the leaders previously mentioned.
        </p>
        <div className="Leaders-portrait"> 
          <img src={ellen} className="Leaders-image" alt="Ellen Degeneres" />
          <div className="Overlay">
              <div className="Image-text">Ellen Degeneres</div>
          </div>
        </div>
        <p className="Leaders-intro">
          <span>In</span> the LGBTQ+ there are leaders that have dedicated a majority of their time to the movement through leading organizations like the Gay Straight Alliance and Heritage of Pride. While these leaders have made strides for the movement by spreading awareness, they are less well known than the leaders of the Civil Rights movement. Instead the LGBTQ+ has pop culture leaders like Miley Cyrus, Lady Gaga, and Ellen Degeneres who use their platform as celebrities to spread awareness.
        </p>
        <p className="Leaders-intro">
          <span>Miley</span> Cyrus and Lady Gaga both started out as only singers, but have since used their voice and their followers to spread awareness for the LGBTQ+. Miley Cyrus has come out as pansexual and Lady Gaga has come out as bisexual, both publicly putting themselves in the LGBTQ+ community, not just as its allies. On top of this, Miley Cyrus started the #instapride campaign with instagram to give transgender people a platform to raise awareness of their struggles. She also started the Happy Hippie foundation to rally young people to fight social injustices towards vulnerable groups like the transgender community. Lady Gaga has spoken about equality at many of concerts and also at the 2009 National Equality March on Washington DC. She also made public speeches opposing the “Don’t Ask, Don’t Tell” US policy.
        </p>
        <p className="Leaders-intro">
          <span>It</span> seems that the current leaders who are only known for their support of a movement, like the LGBTQ+ movement, get less recognition than the leaders who establish themselves through another medium first and then use their platform to progress a movement. This phenomenon could be a result of newer generations being more focused on entertainment than current issues. With the fast paced media surrounding us today, someone making speeches may not be as captivating as it was 50 years ago.
        </p>
      </div>
    );
  }
}

export default Comparisons;