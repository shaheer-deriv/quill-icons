import type { Meta, StoryObj } from '@storybook/react';

import { SocialFacebookBrandDarkIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialFacebookBrandDarkIcon',
  component: SocialFacebookBrandDarkIcon,
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
} satisfies Meta<typeof SocialFacebookBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SocialFacebookBrandDarkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
