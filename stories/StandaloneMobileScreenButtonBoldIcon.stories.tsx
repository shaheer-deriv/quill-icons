import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMobileScreenButtonBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMobileScreenButtonBoldIcon',
  component: StandaloneMobileScreenButtonBoldIcon,
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
} satisfies Meta<typeof StandaloneMobileScreenButtonBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMobileScreenButtonBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
