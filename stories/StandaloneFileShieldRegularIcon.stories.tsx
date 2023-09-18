import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileShieldRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileShieldRegularIcon',
  component: StandaloneFileShieldRegularIcon,
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
} satisfies Meta<typeof StandaloneFileShieldRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileShieldRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
