'use client';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';

export default function Opinion() {

  return (
    <section className="opinion-section">
  
        <h2 className="opinion-title">What Our Customers Say</h2>
      

      {/* Card */}
      <div className="opinion-card">
        <div className="opinion-avatar">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User Avatar"
            width={50} // صغرنا الحجم
            height={5}
            className="avatar-img"
          />
          <div className="user-info">
            <h3>Sarah Johnson</h3>
            <p>Food Enthusiast</p>
          </div>
        </div>

        <p className="opinion-text">
          “I absolutely loved the dishes here! The flavors are authentic and the service is outstanding. Highly recommend to everyone!”
        </p>

        <div className="opinion-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>

      </div>

      {/* Card 2 */}
      <div className="opinion-card">
        <div className="opinion-avatar">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            width={50}
            height={50}
            className="avatar-img"
          />
          <div className="user-info">
            <h3>Michael Brown</h3>
            <p>Chef & Blogger</p>
          </div>
        </div>

        <p className="opinion-text">
          “A must-visit restaurant! Every meal feels like a celebration. The ambience is cozy and perfect for family dinners.”
        </p>

        <div className="opinion-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>

      </div>

    </section>
  );
}