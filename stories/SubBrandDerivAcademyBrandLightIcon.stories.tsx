import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivAcademyBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivAcademyBrandLightIcon',
  component: SubBrandDerivAcademyBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivAcademyBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivAcademyBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
