import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMobileScreenButtonRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMobileScreenButtonRegularIcon',
  component: StandaloneMobileScreenButtonRegularIcon,
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
} satisfies Meta<typeof StandaloneMobileScreenButtonRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMobileScreenButtonRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
