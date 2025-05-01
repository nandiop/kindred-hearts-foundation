import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, Container } from '@mui/material';

const heroSlides = [
  {
    title: 'Make a Difference',
    subtitle: "In Someone's Life",
    description:
      'Join our mission to empower communities through sustainable development, education, and skill-building.',
      bgImage: 'https://give.do/blog/wp-content/uploads/2023/08/The-role-of-the-education-NGO-in-India-enthusiastic-children-beneficiaries-education-classroom-preview.jpg',
    buttons: [
      { label: 'Donate Now', href: '/donate', variant: 'contained', color: 'warning' },
      { label: 'Learn More', href: '/about', variant: 'outlined', color: 'inherit' },
    ],
  },
  {
    title: 'Empowering Youth',
    subtitle: '',
    description: 'We provide the tools and training young people need to succeed.',
    bgImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Dreaming_child2_A_workshop_conducted_by_an_NGO%2C_at_Gurgaon.jpg/960px-Dreaming_child2_A_workshop_conducted_by_an_NGO%2C_at_Gurgaon.jpg?20171019121205',
    overlay: true,
    buttons: [{ label: 'Explore Programs', href: '/programs', variant: 'contained', color: 'primary' }],
  },
  {
    title: 'Building Strong Communities',
    subtitle: '',
    description: 'Together, we’re creating lasting change through local action.',
    bgImage: 'https://give.do/blog/wp-content/uploads/2022/09/Calcutta-Foundation-1024x598.jpg',
    buttons: [{ label: 'See Our Impact', href: '/impact', variant: 'outlined', color: 'inherit' }],
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {heroSlides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: '90vh',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            background: slide.bg || undefined,
            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          {slide.overlay && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
          )}
          <Container
    sx={{
      position: 'absolute',
      bottom: 40, // distance from bottom
      left: 0,
      right: 0,
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingBottom:"60px"
    }}
  >
    <Typography variant="h2" fontWeight="bold" gutterBottom>
      {slide.title}
      {slide.subtitle && (
        <Box component="span" color="warning.main">
          <br />
          {slide.subtitle}
        </Box>
      )}
    </Typography>
    <Typography variant="h6" mb={4}>
      {slide.description}
    </Typography>
    <Box display="flex" gap={2}>
      {slide.buttons.map((btn, i) => (
        <Button
          key={i}
          variant={btn.variant}
          color={btn.color}
          href={btn.href}
          size="large"
        >
          {btn.label}
        </Button>
      ))}
    </Box>
  </Container>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroCarousel;
