import type { Meta, StoryObj } from '@storybook/react';

import { PlatformsDmt5DerivedIcon } from '../src/react/Platforms';

const meta = {
  title: 'platforms/PlatformsDmt5DerivedIcon',
  component: PlatformsDmt5DerivedIcon,
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
} satisfies Meta<typeof PlatformsDmt5DerivedIcon>;

export default meta;

type Story = StoryObj<typeof PlatformsDmt5DerivedIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
