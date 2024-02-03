<script lang="ts">
import type{ PlanetsInfo } from '../../../type';
export let planet:PlanetsInfo;
    function millisecondsToHours(milliseconds:number) {
        return (milliseconds / (1000 * 60 * 60)).toFixed(2); // 1 hour = 1000 milliseconds * 60 seconds * 60 minutes
    }
    function millisecondsToYears(milliseconds:number,tab:string) {
        return (milliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2); // 1 year = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 365.25 days
    }
    function centimetersToKilometers(centimeters:number) {
        return (centimeters / 100000).toFixed(2);; // 1 kilometer = 100,000 centimeters
    }
</script>
<footer>
    <div class="footer-planet"><p class="footer-name">ROTATION TIME</p> <p class="footer-number">{millisecondsToHours(planet.rotation)} HOURS</p></div>
    <div class="footer-planet"><p class="footer-name">REVOLUTION TIME</p> <p class="footer-number">{millisecondsToYears(planet.revolution ,'   ')} YEARS</p> </div>
    <div class="footer-planet"><p class="footer-name">RADIUS</p> <p class="footer-number">{centimetersToKilometers(planet.radius)} KM bb   b</p> </div>
    <div class="footer-planet"><p class="footer-name">AVERAGE TEMP.</p> <p class="footer-number">{planet.temperature}°C</p></div>
  </footer>

<style>
   .footer-name{
    margin-top: 1.5rem;
    margin-left: 3rem;
    color: #FFF;
font-family: Spartan;
font-size: 0.9rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem; /* 227.273% */
letter-spacing: 0.0625rem;
text-transform: uppercase;
opacity: 0.5;
  }
  footer{
    display: flex;
    justify-content: center;
    margin-top: 5.45rem;
    margin-bottom: 5rem;
    opacity: 1.5;
  }
  .footer-planet{
    margin-left: 1.9rem;
    width: 15.9375rem;
height: 8rem;

border: 1px solid #FFF;

  }
  .footer-number{
    margin-top: 1.3rem;
    margin-left: 3rem;
    color: #FFF;
    letter-spacing: -0.09375rem;
    
  }
</style>