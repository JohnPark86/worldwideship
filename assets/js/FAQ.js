import React from 'react';
import ReactDom from 'react-dom';
import Collapsible from 'react-collapsible';
import {} from '../css/faq.css';

export default class FAQ extends React.Component{
	
	render(){
		return(
			<div>
                        <Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="Why Worldwide Shipping LLC?">
                        <p>All of our vehicle carriers are pre-screened to ensure that you are in contact with only the most reputable carriers in the industry. There are thousands ofDepartment of Transportation (DOT) registered auto transporters on the market, however a high percentage of those transporters have been rated very poorly in the past, and are now quite desperate to find a vehicle to ship. The majority of brokers purposely choose a poorly rated carrier to make a bigger brokers fee, thus leaving the client with missed pick up/delivery dates, uninsured damages to their vehicle, and an overall lack of customer service. </p>
                        <p>Here at Worldwide Shipping LLC, we will only select a carrier for you if they have a 98% rating (or higher), and at least 3 years experience. This way, we only provide you with the safest, most reputable auto transporters in the nation. We have pre-selected the top auto transport companies so they can compete for your business, insuring you receive the best service at the best possible price.</p>
                        <p className="bold">We Offer: </p>
                        <ul className="bold">
                              <li>Military Discounts</li>
                              <li>Multiple Car Discounts</li>
                              <li>Repeat Client Discounts</li>
                              <li>Dealership Rewards Accounts</li>
                        </ul>
                        <p>Whether you need to transport a vehicle to the next town or across the world, Worldwide Shipping LLC makes it easy and convenient with both domestic and international services. Our prices are among the most competitive of all reputable vehicle transporters in the industry. Our goal is not to be the largest company, but to be the one that provides excellence and integrity in an industry that lacks both.</p>
                        </Collapsible>
				<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="Why am I getting such a wide range of prices?">
		        	<p>When you receive an initial quote, it is NOT a guaranteed price! It is an estimate of what it ‘might’ cost to move your car. Most brokers will quote you a lower price to “bait you in”, and will call you the day prior to the scheduled pick up with an elaborate excuse as to why your price has been raised. Low quotes do not transport vehicles. If it sounds too good to be true – it probably is!</p>
		      	</Collapsible>
		      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="How does auto transport work?">
		        	<p>To place an order, we will need the pickup and delivery addresses, along with contact names and phone numbers to locate the best suited carrier for your needs. After you place your order, the transport of your vehicle will be scheduled according to the dates you have previously requested. After a truck has been assigned, you will receive a call from Worldwide Shipping LLC with the carriers schedule, name and phone number. The driver will call you 12 to 24 hours in advance to schedule an approximate time for pick up and delivery.</p>
		      	</Collapsible>
      			<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="Is my vehicle insured during transport?">
      	        	<p>Upon pick up, the carrier will go through a 9 point inspection of your vehicle. He will provide you a copy of this report, also known as a bill of lading. This same process will happen upon delivery so you can ensure your vehicle arrives in the same condition it was picked up in. In the rare event that damage has occurred, please contact Worldwide Shipping LLC immediately to file a claim with the carrier’s insurance. Please be sure to notate the damage on the bill of lading to provide to the insurance company.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="What if nobody is available to meet the driver?">
      	        	<p>We prefer that there is someone available to meet the driver and do the 9 point inspection, however we do understand that sometimes that is not a possibility. In that event, the keys can be left with the vehicle. Prior to pick up, you will coordinate a safe location with the driver as to where to leave the keys. The bill of lading will be sent to you via a photo message.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="When will my car be picked up?">
      	        	<p>For a standard shipment it will typically take one to four days from the time that you place your order. Expedited services are available for rush shipments and time sensitive transports.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="When will my car be delivered?">
      	        	<p>Drivers are allowed to go about 300 miles per day, however that is an estimate and the delivery date will be provided at the time of dispatch.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="When do I pay for my auto transport?">
      	        	<p>There are no deposits with Worldwide Shipping LLC! You don’t spend a penny until there is a licensed, bonded, and insured carrier scheduled to pick up your vehicle. At the time of dispatch, we will call you with your drivers name, number, and insurance paperwork. At that point, we will authorize a portion of your total cost! The balance is paid on delivery.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="How can I pay for my auto transport?">
      	        	<p>A portion of your total (amount will be given to you prior to dispatch) will be charged to any credit or debit card once we have dispatched your carrier. The balance will be due upon delivery, via cash, a money order, or a certified check made out to your carrier directly.</p>
      	      	</Collapsible>
      	      	<Collapsible triggerClassName="question" triggerOpenedClassName="question" trigger="Can I put items in my vehicle?">
      	        	<p>We advise you not to, as personal items are not insured if they are damaged or reported missing. If you decide to pack personal items inside your vehicle, it must not exceed 75 lbs. and must be kept in the trunk or back seats (below the window line).</p>
      	      	</Collapsible>
      	      	<p>If you can’t find the answer to your question, you can reach us 24 hours a day, 365 days a year at support@worldwideshippingllc.com. For faster service, you can call us directly at 888-505-2851 from 8 am until 9 pm, 7 days a week.</p>
			</div>
		)
	}
}