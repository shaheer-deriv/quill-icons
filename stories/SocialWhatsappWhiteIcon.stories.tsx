import type { Meta, StoryObj } from '@storybook/react';

import { SocialWhatsappWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialWhatsappWhiteIcon',
  component: SocialWhatsappWhiteIcon,
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
} satisfies Meta<typeof SocialWhatsappWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialWhatsappWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
