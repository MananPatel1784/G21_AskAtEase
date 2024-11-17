import React, { useState } from 'react';
import './ProfilePage.css';
import Header from './MainHeader';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCamera, FaEdit, FaSave, FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaLanguage, FaHeart, FaTransgender, FaEnvelope, FaUsers, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState("https://randomuser.me/api/portraits/men/41.jpg");
    const [coverPhoto, setCoverPhoto] = useState("https://images.unsplash.com/photo-1518296071042-e2f9713408ac?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjY0NXwwfDF8c2VhcmNofDJ8fGZhdGV8ZW58MHx8fHwxNjg2OTQyMjM3&ixlib=rb-1.2.1&q=80&w=1080");
    const [name, setName] = useState("Anonymous User");
    const [bio, setBio] = useState("Tech Enthusiast | UI/UX designer");
    const [email, setEmail] = useState("johndoe@example.com");
    const [phone, setPhone] = useState("+1 234 567 890");
    const [dob, setDob] = useState("1990-01-01");
    const [gender, setGender] = useState("Male");

    const [socialLinks, setSocialLinks] = useState({
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com/in",
    });

    const [isEditingLanguages, setIsEditingLanguages] = useState(false);
    const [isEditingPlaces, setIsEditingPlaces] = useState(false);
    const [isEditingInterests, setIsEditingInterests] = useState(false);

    const [languages, setLanguages] = useState("English");
    const [places, setPlaces] = useState("AskAtEase");
    const [interests, setInterests] = useState("Internet Surfing");

    const [communities, setCommunities] = useState(0);

    const handlePhotoUpload = (e, setPhoto) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEditing = () => setIsEditing(!isEditing);

    const handleSocialLinkChange = (e, platform) => {
        setSocialLinks({
            ...socialLinks,
            [platform]: e.target.value
        });
    };

    return (

        <div className="flex flex-col gap-y-4">
            <Header/>

        <div className="profile-page bg-gradient-to-b from-[#F0D9C4] to-[#FF9797]">
            {/* Cover Photo */}
            <div className="cover-photo-container bg-gradient-to-b from-[#F0D9C4] to-[#FF9797]">
                <img src={coverPhoto} alt="Cover" className="cover-photo" />
                <label className="upload-icon cover-upload-icon" htmlFor="cover-upload">
                    <FaCamera />
                </label>
                <input
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, setCoverPhoto)}
                />
            </div>

            {/* Profile Photo */}
            <div className="profile-photo-container">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
                <label className="upload-icon profile-upload-icon" htmlFor="profile-upload">
                    <FaCamera />
                </label>
                <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, setProfilePhoto)}
                />
            </div>

            {/* Profile Info */}
            <div className="profile-info">
                <div className="profile-stats-container">
                    <div className="community-count">
                        <FaUsers /> <span>{communities} Communities Joined</span>
                    </div>
                    <button className="edit-profile-btn" onClick={toggleEditing}>
                        {isEditing ? <FaSave /> : <FaEdit />} {isEditing ? "Save Changes" : "Edit Profile"}
                    </button>
                </div>

                <h2>{name}</h2>
                <p className="profile-bio">{bio}</p>
                <div className="social-links">
                    {isEditing ? (
                        <>
                            <div>
                                <label>Facebook</label>
                                <input
                                    type="text"
                                    value={socialLinks.facebook}
                                    onChange={(e) => handleSocialLinkChange(e, 'facebook')}
                                />
                            </div>
                            <div>
                                <label>Twitter</label>
                                <input
                                    type="text"
                                    value={socialLinks.twitter}
                                    onChange={(e) => handleSocialLinkChange(e, 'twitter')}
                                />
                            </div>
                            <div>
                                <label>Instagram</label>
                                <input
                                    type="text"
                                    value={socialLinks.instagram}
                                    onChange={(e) => handleSocialLinkChange(e, 'instagram')}
                                />
                            </div>
                            <div>
                                <label>LinkedIn</label>
                                <input
                                    type="text"
                                    value={socialLinks.linkedin}
                                    onChange={(e) => handleSocialLinkChange(e, 'linkedin')}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {socialLinks.facebook && (
                                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Personal Info */}
            <div className="profile-section personal-info">
                <h3>Personal Information</h3>
                <div className="profile-items">
                    <div className="profile-item">
                        <label><FaBirthdayCake /> Date of Birth</label>
                        {isEditing ? (
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        ) : (
                            <p>{dob}</p>
                        )}
                    </div>
                    <div className="profile-item">
                        <label><FaEnvelope /> Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        ) : (
                            <p>{email}</p>
                        )}
                    </div>
                    <div className="profile-item">
                        <label><FaTransgender /> Gender</label>
                        {isEditing ? (
                            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : (
                            <p>{gender}</p>
                        )}
                    </div>
                    <div className="profile-item">
                        <label><FaPhone /> Phone</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        ) : (
                            <p>{phone}</p>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Languages Section */}
            <div className="profile-section">
                <h3>
                    <FaLanguage /> Languages
                    <span className="edit-icon" onClick={() => setIsEditingLanguages(!isEditingLanguages)}>
                        {isEditingLanguages ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                </h3>
                {isEditingLanguages ? (
                    <input
                        type="text"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        onBlur={() => setIsEditingLanguages(false)}
                    />
                ) : (
                    <p>{languages}</p>
                )}
            </div>

            {/* Places Section */}
            <div className="profile-section">
                <h3>
                    <FaMapMarkerAlt /> Places
                    <span className="edit-icon" onClick={() => setIsEditingPlaces(!isEditingPlaces)}>
                        {isEditingPlaces ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                </h3>
                {isEditingPlaces ? (
                    <input
                        type="text"
                        value={places}
                        onChange={(e) => setPlaces(e.target.value)}
                        onBlur={() => setIsEditingPlaces(false)}
                    />
                ) : (
                    <p>{places}</p>
                )}
            </div>

            {/* Interests Section */}
            <div className="profile-section">
                <h3>
                    <FaHeart /> Interests
                    <span className="edit-icon" onClick={() => setIsEditingInterests(!isEditingInterests)}>
                        {isEditingInterests ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                </h3>
                {isEditingInterests ? (
                    <input
                        type="text"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        onBlur={() => setIsEditingInterests(false)}
                    />
                ) : (
                    <p>{interests}</p>
                )}
            </div>
        </div>

        </div> 
    );
  }
export default ProfilePage;
