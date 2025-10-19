import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class App {
  protected readonly title = signal('prohub');
  features = [
    {
      icon: '👥',
      title: 'Dedicated Designers',
      description: 'Professional designers ready for your projects',
      color: 'bg-blue-600',
    },
    {
      icon: '💼',
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction or money back',
      color: 'bg-gray-900',
    },
    {
      icon: '🎨',
      title: 'Advanced Security',
      description: 'Secure payment and data protection',
      color: 'bg-gray-900',
    },
  ];

  categories = [
    {
      icon: '🎨',
      title: 'Brand Identity',
      description: "Visually and professionally communicate a brand's core personality.",
      experts: [
        'https://i.pravatar.cc/150?img=10',
        'https://i.pravatar.cc/150?img=11',
        'https://i.pravatar.cc/150?img=12',
        'https://i.pravatar.cc/150?img=13',
      ],
      bgColor: 'bg-white',
    },
    {
      icon: '🎯',
      title: 'UI/UX Design',
      description: 'Crafting intuitive finishing and user-centric interfaces for digital products.',
      experts: [
        'https://i.pravatar.cc/150?img=14',
        'https://i.pravatar.cc/150?img=15',
        'https://i.pravatar.cc/150?img=16',
        'https://i.pravatar.cc/150?img=17',
      ],
      bgColor: 'bg-gray-900',
    },
    {
      icon: '💙',
      title: 'Social Media',
      description: 'Strategic content and imagery designed aimed at brand awareness.',
      experts: [
        'https://i.pravatar.cc/150?img=18',
        'https://i.pravatar.cc/150?img=19',
        'https://i.pravatar.cc/150?img=20',
        'https://i.pravatar.cc/150?img=21',
      ],
      bgColor: 'bg-white',
    },
    {
      icon: '⚡',
      title: 'Animation',
      description:
        'Versatile designers and Illustrator capable of producing all manner of characters.',
      experts: [
        'https://i.pravatar.cc/150?img=22',
        'https://i.pravatar.cc/150?img=23',
        'https://i.pravatar.cc/150?img=24',
        'https://i.pravatar.cc/150?img=25',
      ],
      bgColor: 'bg-white',
    },
  ];

  testimonials = [
    {
      name: 'Faizal Alena',
      role: 'Director at Allegra',
      image: 'https://i.pravatar.cc/150?img=30',
      rating: 5,
      text: 'Having a home based business is a wonderful asset to your life. The perfect stratagy to deal with all probls.',
    },
    {
      name: 'Brooklyn Simmons',
      role: 'Lead Designer',
      image: 'https://i.pravatar.cc/150?img=31',
      rating: 5,
      text: 'LookScout is a great tool that has really helped our team create attractive campaigns for our clients.',
    },
    {
      name: 'Esther Howard',
      role: 'Marketing Coordinator',
      image: 'https://i.pravatar.cc/150?img=32',
      rating: 5,
      text: 'Having a home based business is a wonderful asset to your life. The perfect strategy to deal with all problems.',
    },
    {
      name: 'Robert Fox',
      role: 'Product Manager',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: "We've tried many platforms and this is by far the best. The interface is intuitive and the results are amazing.",
    },
    {
      name: 'Devon Lane',
      role: 'Senior Developer',
      image: 'https://i.pravatar.cc/150?img=34',
      rating: 5,
      text: 'The team is incredibly responsive and the platform delivers exactly what we need for our creative projects.',
    },
    {
      name: 'Kristin Watson',
      role: 'UX Designer',
      image: 'https://i.pravatar.cc/150?img=35',
      rating: 5,
      text: 'Outstanding service and quality. This platform has transformed how we work with freelancers and agencies.',
    },
  ];

  pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'For individuals and small teams just getting started.',
      features: [
        { text: 'Access to 50 basic templates', included: true },
        { text: 'Standard customer support', included: true },
        { text: 'Basic project tracking', included: true },
        { text: 'Limited collaboration tools', included: true },
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$16',
      period: 'per month',
      description: 'For growing teams that need more power and flexibility.',
      features: [
        { text: 'Access to 500 premium templates', included: true },
        { text: 'Priority 24/7 customer support', included: true },
        { text: 'Advanced project management', included: true },
        { text: 'Unlimited collaboration tools', included: true },
        { text: 'Priority support for faster response', included: true },
      ],
      buttonText: 'Try 7 Days',
      buttonVariant: 'primary',
      popular: true,
    },
    {
      name: 'Custom',
      price: '$',
      period: 'custom pricing',
      description: 'For large organizations with specific needs.',
      features: [
        { text: 'Unlimited premium templates', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom integrations & workflow', included: true },
        { text: 'Advanced analytics & reporting', included: true },
        { text: 'Enterprise-grade security', included: true },
        { text: 'Custom SLA & support', included: true },
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline',
      popular: false,
    },
  ];

  portfolioImages = [
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop',
  ];

  navLinks = ['Home', 'Market', 'Talent', 'Pricing', 'Contact'];
  footerLinks = {
    categories: ['Developers', 'Design & Creative', 'Marketing & SEO', 'Writing & Translation'],
    forTalent: ['Join As Freelancer', 'Talent Marketplace', 'Talent Scout Program'],
    company: ['About Us', 'Contact', 'Blog', 'Careers'],
  };
}
