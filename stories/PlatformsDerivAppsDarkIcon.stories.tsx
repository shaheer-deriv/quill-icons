import type { Meta, StoryObj } from '@storybook/react';

import { PlatformsDerivAppsDarkIcon } from '../src/react/Platforms';

const meta = {
  title: 'platforms/PlatformsDerivAppsDarkIcon',
  component: PlatformsDerivAppsDarkIcon,
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
} satisfies Meta<typeof PlatformsDerivAppsDarkIcon>;

export default meta;

type Story = StoryObj<typeof PlatformsDerivAppsDarkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
