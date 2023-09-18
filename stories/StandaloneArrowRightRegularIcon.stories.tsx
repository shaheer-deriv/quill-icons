import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightRegularIcon',
  component: StandaloneArrowRightRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
