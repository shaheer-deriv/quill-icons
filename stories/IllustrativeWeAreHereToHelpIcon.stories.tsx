import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeWeAreHereToHelpIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeWeAreHereToHelpIcon',
  component: IllustrativeWeAreHereToHelpIcon,
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
} satisfies Meta<typeof IllustrativeWeAreHereToHelpIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeWeAreHereToHelpIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
