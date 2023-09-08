import type { Meta, StoryObj } from '@storybook/react';

import { SocialWhatsappIcon } from '../src/react/Social/Social';

const meta = {
  title: 'social/SocialWhatsappIcon',
  component: SocialWhatsappIcon,
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
} satisfies Meta<typeof SocialWhatsappIcon>;

export default meta;

type Story = StoryObj<typeof SocialWhatsappIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
