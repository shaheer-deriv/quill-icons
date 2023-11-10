import type { Meta, StoryObj } from '@storybook/react';

import { SocialWhatsappBrandIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialWhatsappBrandIcon',
  component: SocialWhatsappBrandIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialWhatsappBrandIcon>;

export default meta;

type Story = StoryObj<typeof SocialWhatsappBrandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
